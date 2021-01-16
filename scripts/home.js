import {config} from '../config'

class Home {
  constructor(title, welcome) {
    this.title = title;
    this.welcome = welcome;
    this.config = config;

  }

  start() {
    console.log('start');
  }

  submit() {
    console.log('submit')
  }

  finish() {
    console.log('finish')
  }

}

