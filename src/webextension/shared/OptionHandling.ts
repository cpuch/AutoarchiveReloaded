/*
Copyright 2018 Brummolix (AutoarchiveReloaded, https://github.com/Brummolix/AutoarchiveReloaded )

 This file is part of AutoarchiveReloaded.

    AutoarchiveReloaded is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    AutoarchiveReloaded is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with AutoarchiveReloaded.  If not, see <http://www.gnu.org/licenses/>.
*/

var EXPORTED_SYMBOLS = [
    'AutoarchiveReloadedWeOptionHelper'
]

class AutoarchiveReloadedOptionHandling
{
    getDefaultSettings():ISettings
    {
        return {
            globalSettings:this.getDefaultGlobalSettings(),
            accountSettings: {},
        };
    }

    getDefaultGlobalSettings():IGlobalSettings
    {
        return {
            archiveType: "manual",
            enableInfoLogging: false
        };
    }

    getDefaultAccountSettings():IAccountSettings
    {
        return {
            bArchiveOther: false,
            daysOther: 360,
            bArchiveMarked: false,
            daysMarked: 360,
            bArchiveTagged: false,
            daysTagged: 360,
            bArchiveUnread: false,
            daysUnread: 360
        };
    }

    convertPartialSettings(partialSettings:any):ISettings
    {
        let defaultSettings:ISettings = this.getDefaultSettings();
        const concatedSettings:ISettings = {...defaultSettings, ...partialSettings};

        //use defaultSettings for all accounts, too
        for (let accountId in concatedSettings.accountSettings)
        {
            let accountSetting = concatedSettings.accountSettings[accountId];
            concatedSettings.accountSettings[accountId] = {...this.getDefaultAccountSettings(), ...accountSetting};
        };

        return concatedSettings;
    }
}
