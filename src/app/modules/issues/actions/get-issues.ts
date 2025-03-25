import { environment } from '@/environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';
import { GithubIssue, State } from '../interfaces/github-issues.interface';

const BASE_URL = environment.BASE_URL;
const GITHUB_TOKEN = environment.GITHUB_TOKEN;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<GithubIssue[]> => {
  await sleep(1500);
  const params = new URLSearchParams();
  params.append('state', state);

  if(selectedLabels.length>0){
    params.append('labels', selectedLabels.join(','))
  }

  try {
    const response = await fetch(`${BASE_URL}/issues?${params}`, {
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
