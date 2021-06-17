import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  constructor(
    public articlesService: ArticlesService,
    public settingsService: SettingsService,
    public userService: UserService
  ) {}

  async ngOnInit() {
    if(!this.settingsService.meta.value) await this.settingsService.getSettings();
    if(!this.userService.users.value) await this.userService.getAllUsers();
    if(!this.articlesService.allArticles.value) await this.articlesService.getAllArticles();
  }

  displayedColumns: string[] = ['title', 'authorName', 'published', 'edited', 'edit', 'open'];
}