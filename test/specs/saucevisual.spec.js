describe('Sauce Visual Mobile Example', () => {
  it('should capture homepage snapshot on Android', async () => {
    await browser.url('https://example.com');

    await browser.execute('sauce:visual', {
      name: 'Homepage - Android Chrome',
    });

    await $('a[href="/login"]').click();

    await browser.execute('sauce:visual', {
      name: 'Login Page - Android Chrome',
    });
  });
});
