import {writeFile} from "node:fs/promises";
import {join, resolve} from "node:path";

const rootDir = resolve(join(import.meta.dirname, '..'));

const componentDir = join(rootDir, './src/app/build-info');

await main();

async function main() {
  const gh = process.env.GITHUB_SERVER_URL;
  const repo = process.env.GITHUB_REPOSITORY ?? 'skgrush/grush.org';
  const runId = process.env.GITHUB_RUN_ID;
  const url =  repo && runId
    ? `${gh}/${repo}/actions/runs/${runId}/`
    : null;

  const json = {
    repo,
    url,
    workflow: process.env.GITHUB_WORKFLOW ?? 'Local',
    workflowRunNumber: process.env.GITHUB_RUN_NUMBER ?? '0',
    refName: process.env.GITHUB_REF_NAME ?? 'local',
  };

  await writeFile(
    join(componentDir, 'build-info.json'),
    JSON.stringify(json, null, 2),
  );
}
