"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    };

    addClock(time, ring, alarmId) {
        if (alarmId === undefined) {
            throw new Error("Параметр id не передан")
        }
        
        if (this.alarmCollection.some(a => a.id === alarmId)) {
            console.error("Будильник с таким id уже существует");
            return;
        }
        let alarm = {
            id: alarmId,
            time: time,
            callback: ring
        };
        this.alarmCollection.push(alarm);
    };

    removeClock(alarmId) {
        if (this.alarmCollection.some(a => a.id === alarmId)) {
            this.alarmCollection = this.alarmCollection.filter(a => a.id != alarmId)
            return true;
        }
        return false;
    };

    getCurrentFormattedTime(minute = 0) {
        let ms = minute * 60000;
        let date = Date.now() + ms;
        let d = new Date(date);
        let options = {
            hour: "numeric",
            minute: "numeric"
        }
        return d.toLocaleString("ru", options);
    };

    start() {
        let checkClock = (alarm) => {
            // console.log(alarm.time);
            // console.log(this);
            // console.log(this.getCurrentFormattedTime());
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }

        if (this.timerId === undefined) {
            this.alarmId = setInterval(() => {
                this.alarmCollection.forEach(a => checkClock(a))
            }, 1000);
        }
    };

    stop() {
        if (this.alarmId != undefined) {
            clearInterval(this.alarmId);
            this.alarmId = undefined;
        }
    };

    printAlarms() {
        console.log(`Count of alarms: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(a => console.log(`Будильник ${a.id} заведен на ${a.time}`));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Wake up"), 1);

phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => {
    console.log("Hurry");
    phoneAlarm.removeClock(2);
}, 2);

phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), () => {
    console.log("Come on");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.printAlarms();

phoneAlarm.start();