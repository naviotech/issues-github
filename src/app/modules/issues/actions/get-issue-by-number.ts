import { environment } from '@/environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';
import { GithubIssue } from '../interfaces/github-issues.interface';

const BASE_URL = environment.BASE_URL;
const GITHUB_TOKEN = environment.GITHUB_TOKEN;

export const getIssueByNumber = async (id: string): Promise<GithubIssue> => {
  await sleep(1500);
  try {
    const response = await fetch(`${BASE_URL}/issues/${id}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw "Can't load issue";
    }

    const issue: GithubIssue = await response.json();

    return issue;
  } catch (error) {
    throw "Can't load issue";
  }
};
