const assert = require("assert");

describe("Open the app", () => {
  it("This needs to work I am so bored", async () => {
    loginButton = await $(
      "//android.widget.Button[@content-desc='Sign in with FarmIQ']"
    );
    await loginButton.waitForDisplayed({
      timeout: 20000,
    });

    versionText = await $(
      '//android.view.ViewGroup[@content-desc="Show more version info"]/android.widget.TextView'
    );

    await versionText.waitForDisplayed({});

    await loginButton.click();

    usernameField = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.widget.EditText"
    );

    await usernameField.setValue("costellot");

    passwordField = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText"
    );

    await passwordField.setValue("farm1q2017");

    continueButton = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button"
    );

    await continueButton.click();

    browser.debug();
  });
});
