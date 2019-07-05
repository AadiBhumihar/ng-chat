import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChat } from './ng-chat.component';
import { EmojifyPipe } from './pipes/emojify.pipe';
import { LinkfyPipe } from './pipes/linkfy.pipe';
import { SecurePipe } from "./pipes/secure-pipe";
import { GroupMessageDisplayNamePipe } from './pipes/group-message-display-name.pipe';
import { NgChatOptionsComponent } from './components/ng-chat-options/ng-chat-options.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [NgChat, EmojifyPipe, LinkfyPipe,SecurePipe, GroupMessageDisplayNamePipe, NgChatOptionsComponent],
  exports: [NgChat]
})
export class NgChatModule {
}
