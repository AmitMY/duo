import {EventEmitter, Injectable} from '@angular/core';
import { User } from './user';
import { TranslationProvider } from '../translation/translation';
import { MessageController } from '../messages/message-controller';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Message } from '../messages/message';
import {Platform} from "ionic-angular";

@Injectable()
export class UserController {
  constructor(private speechRecognition: SpeechRecognition,
              private translation: TranslationProvider,
              private messageCtrl: MessageController,
              private platform: Platform) {
  }

  create(language: string, messageEmitter: EventEmitter<Message>, updateEmitter: EventEmitter<any>): User {
    return new User(language, messageEmitter, updateEmitter, this.speechRecognition, this.translation, this.messageCtrl, this.platform);
  }
}
