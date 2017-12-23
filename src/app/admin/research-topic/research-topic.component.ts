import {Component, OnInit} from '@angular/core';
import {ResearchServices} from '../../shared/services/research.services';
import {topic} from '../../shared/model/research-news-models';

@Component({
  selector: 'research-topic',
  templateUrl: './research-topic.component.html',
  styleUrls: ['./research-topic.component.css']
})
export class ResearchTopicComponent implements OnInit {

  editorLanguage = '中文';
  editorLocale = 'en';

  topics: topic[] = [];
  newTopic: topic = new topic();

  isAdding = false;
  isEditing = false;

  constructor(private researchService: ResearchServices) {
  }

  ngOnInit() {
    this.researchService.getresearchtopic().subscribe(
      data => {
        this.topics = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }

  addNewTopic() {
    this.isAdding = true;
  }

  edit() {
    this.isEditing = true;
    console.log('edit');
  }

  delete(topic: topic) {
    console.log(this.topics.indexOf(topic));
    this.researchService.removeTopic(topic.id).subscribe(
      data => {
        this.topics.splice(this.topics.indexOf(topic), 1);
      },
      err => {
        console.log(err);
      }
    );
  }

  done(topic: topic) {
    if (this.isAdding) {
      this.isAdding = false;
      this.researchService.addTopic(this.newTopic).subscribe(
        data => {
          this.topics.push(this.newTopic);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.isEditing = false;
      this.researchService.editTopic(topic).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
