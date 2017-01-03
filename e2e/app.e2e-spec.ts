import { RxjsMemoryLeakPage } from './app.po';

describe('rxjs-memory-leak App', function() {
  let page: RxjsMemoryLeakPage;

  beforeEach(() => {
    page = new RxjsMemoryLeakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
