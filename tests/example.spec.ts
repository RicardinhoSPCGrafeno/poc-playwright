// @ts-check

import { test, expect } from "@playwright/test";
import { getTestTitle } from "./testCases";

test(
  getTestTitle("TC01", "Test login credenciais inválidas"),
  async ({ page }) => {
    // Arrange
    await page.goto("https://ui-registradora.dev.spcgrafeno.be/");
    const inputEmail = await page.getByTestId("input-email");
    const inputSenha = await page.getByTestId("input-senha");

    // Act
    // Preencher os campos de entrada
    await inputEmail?.fill("Teste");
    await inputSenha?.fill("Teste");

    // Assert
    // Avaliar se a classe "negative" está presente no inputEmail usando toHaveClass() e regex
    await expect(inputEmail).toHaveClass(/negative/);
  }
);

test(
  getTestTitle("TC02", "Test login credenciais inválidas"),
  async ({ page }) => {
    // Arrange
    await page.goto("https://ui-registradora.dev.spcgrafeno.be/");
    const inputEmail = await page.getByTestId("input-email");
    const inputSenha = await page.getByTestId("input-senha");
    const buttonEntrar = await page.getByTestId("button-entrar");

    // Avaliar se a classe "enabled false" está presente no inputEmail usando evaluate
    const validateNegativeClassInputEmail = await inputEmail?.evaluate(
      (element) => {
        return element.classList.contains("enabled false");
      }
    );

    // Avaliar se a classe "enabled false" está presente no inputEmail usando evaluate
    const validateNegativeClassInputSenha = await inputSenha?.evaluate(
      (element) => {
        return element.classList.contains("enabled false");
      }
    );

    // Avaliar se a classe "enabled false" está presente no inputEmail usando evaluate
    const validateDisabledButtonEntrar = await buttonEntrar?.evaluate(
      (element) => {
        return element.classList.contains("disabled");
      }
    );

    // Assert
    // Utilize expect para verificar se validateNegativeClass é false
    expect(validateNegativeClassInputEmail).toBeTruthy();
    expect(validateNegativeClassInputSenha).toBeTruthy();
    expect(validateDisabledButtonEntrar).toBeTruthy();
  }
);

test(getTestTitle("TC03", "Test Case 03"), async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test(getTestTitle("TC04", "Test Case 04"), async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test(getTestTitle("TC01", "Open LinkedIn URL"), async ({ request }) => {
  const test = await request.post(
    "https://registradora.dev.spcgrafeno.be/api/v1/token",
    {
      data: {
        user: {
          email:
            "5d6cc5db-5d79-4074-b71c-c66790ecbe8e@fcbc9bfe-dc08-4fab-9f69-fe995064ace5.be24440b-750e-4273-a896-330b2539f4c5",
          password: "-mvs8uqKB24B2ZS4Zk.",
          otpAttempt: "",
        },
      },
    }
  );
  const respBody = JSON.parse(await test.text());
  expect(test.ok()).toBeTruthy();
  expect(respBody.data.id).toBeTruthy();
  // console.log(respBody)
});
