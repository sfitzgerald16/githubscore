import { GitHuBScorePage } from './app.po';

describe('git-hu-bscore App', () => {
  let page: GitHuBScorePage;

  beforeEach(() => {
    page = new GitHuBScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
