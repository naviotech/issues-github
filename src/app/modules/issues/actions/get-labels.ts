import { environment } from '@/environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';

const BASE_URL = environment.BASE_URL;
const GITHUB_TOKEN = environment.GITHUB_TOKEN;

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);
  try {
    const response = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw "Can't load labels";
    }

    const labels: GithubLabel[] = await response.json();
    
    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
