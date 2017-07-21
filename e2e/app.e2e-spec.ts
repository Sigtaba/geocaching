import { GeocachingPage } from './app.po';

describe('geocaching App', () => {
  let page: GeocachingPage;

  beforeEach(() => {
    page = new GeocachingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
