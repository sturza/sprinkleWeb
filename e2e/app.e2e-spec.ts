import { SprinkleUiPage } from './app.po';

describe('sprinkle-ui App', () => {
  let page: SprinkleUiPage;

  beforeEach(() => {
    page = new SprinkleUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
