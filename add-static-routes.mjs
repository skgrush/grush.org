import {readFile, writeFile} from "node:fs/promises";
import {join} from "node:path";

/** @type string */
const rootDir = import.meta.dirname;

const cacheControl ='public, must-revalidate, proxy-revalidate, max-age=120';

const precedingSlashRemoverRe = /^\/*(.*)$/;

await main();

async function main() {
  const envJson = await readEnvJson();

  const absPathToMetadata = join(rootDir, envJson.metadataFile);
  const metadataJson = await readMetadata(absPathToMetadata);

  const copySourceDirectory = join(rootDir, envJson.copySourceDirectory);

  const prerenderedRoutesJson = await readPrerenderedRoutes(copySourceDirectory);

  const newIndexHtmls =
    Object.keys(prerenderedRoutesJson.routes)
      .map(route => route + '/index.html')
      .map(indexOfRoute => precedingSlashRemoverRe.exec(indexOfRoute)[1]);

  for (const existingRoute of Object.keys(metadataJson)) {
    if (existingRoute.endsWith('index.html') && !newIndexHtmls.includes(existingRoute)) {
      console.warn('Removing route from metadata.json:', existingRoute);
      delete metadataJson[existingRoute];
    }
  }

  for (const indexWithoutSlash of newIndexHtmls) {
    if (indexWithoutSlash in metadataJson) {
      metadataJson[indexWithoutSlash].CacheControl = cacheControl;
    } else {
      console.warn('Adding new metadata entry for', indexWithoutSlash);
      metadataJson[indexWithoutSlash] = { CacheControl: cacheControl };
    }
  }

  await writeFile(
    absPathToMetadata,
    JSON.stringify(metadataJson, undefined, 2) + '\n'
  )
}

async function readEnvJson() {
  const envJsonFile = await readFile(join(rootDir, 'env.json'), { encoding: 'utf8' });

  return JSON.parse(envJsonFile);
}

async function readMetadata(absPathToMetadata) {
  const metadataJsonFile = await readFile(absPathToMetadata, { encoding: 'utf8'});

  return JSON.parse(metadataJsonFile);
}

async function readPrerenderedRoutes(copySourceDirectory) {
  const prerenderedRoutesFile = await readFile(
    join(copySourceDirectory, '../prerendered-routes.json'),
    { encoding: 'utf8' },
  );

  return JSON.parse(prerenderedRoutesFile);
}
