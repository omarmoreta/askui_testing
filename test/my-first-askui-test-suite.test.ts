import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  xit('should generate an (interactive) annotation', async () => {
    // For Windows users:
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    // await aui.annotate();

    // Uncomment for macOS and Linux
    // Delete the lines above to not trigger annotate()
    await aui.annotateInteractively();
  });

  it('should asssert all the navbar elements on the home page', async () => {
    await aui.expect().icon().withText("grid").exists().exec();
    await aui.expect().text().withText("Personal Loans").exists().exec();
    await aui.expect().text().withText("Credit Cards").exists().exec();
    await aui.expect().text().withText("Why Us").exists().exec();
    await aui.expect().text().withText("Branches").exists().exec();
    await aui.expect().text().withText("Resources").exists().exec();  
    await aui.expect().text().withText("Check for Offers").exists().exec()
  });

  it('should click on the login button, type in username and password, and click login', async () => {
    await aui.click().text().withText("8 Log In").exec()  
    await aui.type("Username").exec()
    await aui.pressKey("tab").exec()
    await aui.type("Username").exec()
    await aui.click().button().withText("LOG IN").exec()
  });

  it('should throw an error message when trying to log in', async () => {
    await aui.expect().icon().withText("exclamation").exists().exec()
  });
});
