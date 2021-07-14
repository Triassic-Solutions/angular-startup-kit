import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export enum LogLevel {
  OFF = 0,
  ERROR,
  WARNING,
  INFO,
  DEGUB
}

export class Logger {

  static logLevel = LogLevel.DEGUB;

  static inProductionMode() {
    Logger.logLevel = LogLevel.WARNING;
  }

  debug(...log : any[]) {
    this.log(console.log, LogLevel.DEGUB, log);
  }

  error(...log : any[]) {
    this.log(console.error, LogLevel.ERROR, log);
  }

  warn(...log : any[]) {
    this.log(console.warn, LogLevel.WARNING, log);
  }

  info(...log : any[]) {
    this.log(console.info, LogLevel.INFO, log);
  }

  constructor(private component?: string) { }

  private log(logFunction: (...args: any[]) => void, logLevel: LogLevel, log: any[]) {
    if(logLevel <= Logger.logLevel) {

      const appLog = this.component ? ['[' + this.component + ']'].concat(log) : log;
      logFunction.apply(console, appLog);
    }
  }
}
