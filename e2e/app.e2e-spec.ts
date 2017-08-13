import { IjpPage } from './app.po';

describe('ijp App', () => {
  let page: IjpPage;

  beforeEach(() => {
    page = new IjpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
