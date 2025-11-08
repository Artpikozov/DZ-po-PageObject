export class SettingsPage{
    constructor(page){
        this.password = page.locator('[name="password"]');
        this.upDateSettingsButtom = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');
        this.userName = page.locator('[name="username"]');

    }

}