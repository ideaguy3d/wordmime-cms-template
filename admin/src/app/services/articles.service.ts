import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { apis } from '../../../../config/apis';
import { Article } from '../../../../models/article';
import { AddArticleCategoryRequestBody, CreateArticleRequestBody, GetAllArticlesRequestBody, RemoveCategoryRequestBody, UpdateArticleRequestBody } from '../../../../models/requests';
import { AddArticleCategoryResponseBody, CreateArticleResponseBody, GetAllArticlesResponseBody, RemoveCategoryResponseBody, UpdateArticleResponseBody } from '../../../../models/responses';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticlesService {

    allArticles: BehaviorSubject<Article[]> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
    ) {}

    async getAllArticles() {
        const request: GetAllArticlesRequestBody = {};
        const response = await this.http.post<GetAllArticlesResponseBody>(environment.backend + apis.allArticles, request).toPromise();
        this.allArticles.next(response.data);
        return response;
    }

    async createArticle(article: Article) {
        const request: CreateArticleRequestBody = { data: article };
        const response = await this.http.post<CreateArticleResponseBody>(environment.backend + apis.createArticle, request).toPromise();
        await this.getAllArticles();
        return response;
    }

    async updateArticle(article: Article) {
        const request: UpdateArticleRequestBody = { data: article };
        const response = await this.http.post<UpdateArticleResponseBody>(environment.backend + apis.updateArticle, request).toPromise();
        await this.getAllArticles();
        return response;
    }

    async addArticleCategory(category: string) {
        const request: AddArticleCategoryRequestBody = { data: category };
        const response = await this.http.post<AddArticleCategoryResponseBody>(environment.backend + apis.addArticleCategory, request).toPromise();
        return response;
    }

    async removeArticleCategory(category: string) {
        const request: RemoveCategoryRequestBody = { data: category };
        const response = await this.http.post<RemoveCategoryResponseBody>(environment.backend + apis.removeCategory, request).toPromise();
        return response;
    }
}