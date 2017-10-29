import { EedprojectPage } from './app.po';

describe('eedproject App', () => {
  let page: EedprojectPage;

  beforeEach(() => {
    page = new EedprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
