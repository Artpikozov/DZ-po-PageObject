import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import {MainPage, RegisterPage, SettingsPage, } from '../src/page/index';
const URL =  'https://realworld.qa.guru/';

test.describe('изменение имени', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение Имени пользователя", async ({ page }) => {

        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const editSettings = {
            name: faker.person.fullName()
        }

        const reqisterPage = new RegisterPage(page);
        const mainPage = new MainPage(page)
        const settingsPage = new SettingsPage(page)



        await mainPage.gotoRegister()
        await reqisterPage.Register(user);

        await mainPage.dropDownButton.click();
        await mainPage.settingsButton.click();
        await settingsPage.userName.fill(editSettings.name);
        await settingsPage.upDateSettingsButtom.click();
        await expect(mainPage.dropDownButton).toContainText(editSettings.name);



    });
});
