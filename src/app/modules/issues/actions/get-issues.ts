import { environment } from '@/environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';
import { GithubIssue } from '../interfaces/github-issues.interface';

const BASE_URL = environment.BASE_URL;
const GITHUB_TOKEN = environment.GITHUB_TOKEN;

export const getIssues = async (): Promise<GithubIssue[]> => {
  await sleep(1500);
  try {
    const response = await fetch(`${BASE_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw "Can't load issues";
    }

    const issues: GithubIssue[] = await response.json();

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
