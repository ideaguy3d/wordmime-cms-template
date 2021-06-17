const css = `
  @font-face {
    font-family: 'fontello';
    src: url('/public/webfonts/fontello.eot?88952948');
    src: url('/public/webfonts/fontello.eot?88952948#iefix') format('embedded-opentype'),
        url('/public/webfonts/fontello.woff2?88952948') format('woff2'),
        url('/public/webfonts/fontello.woff?88952948') format('woff'),
        url('/public/webfonts/fontello.ttf?88952948') format('truetype'),
        url('/public/webfonts/fontello.svg?88952948#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap
  }
  
  [class^="icon-"]:before, [class*=" icon-"]:before {
    font-family: "fontello";
    font-style: normal;
    font-weight: normal;
    speak: never;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-left: .2em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-edit:before { content: "\\e800"; } 
  .icon-clock:before { content: "\\e801"; } 
  .icon-twitter:before { content: "\\f099"; } 
  .icon-right-open-big:before { content: '\\e802'; }
  .icon-rss:before { content: "\\f09e"; } 
  .icon-mail-alt:before { content: "\\f0e0"; } 
  .icon-linkedin:before { content: "\\f0e1"; } 
  .icon-youtube:before { content: "\\f167"; } 
  .icon-pinterest:before { content: '\\f231'; }
  .icon-menu:before { content: '\\f0c9'; }
  .icon-instagram:before { content: "\\f16d"; } 
  .icon-facebook:before { content: '\\f09a'; }

  * {
    outline: none;
    font: 400 18px/1.7777777778 Segoe UI,system-ui,-apple-system,sans-serif;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-size: 36px;
    line-height: 44px;
    color: #202124;
  }

  h1, h2, h3, b {
    font-weight: 600;
  }

  h1, h2, h3 {
    line-height: 1.2em;
  }
  
  .main-container {
    max-width: 1400px;
    margin: auto;
    padding: 120px 0px 60px
  }
  
  .container {
    width: 1400px;
    max-width: calc(100% - 30px);
    margin: auto;
  }
  
  .page-description {
    width: 600px;
    text-align: center;
    margin: auto;
    max-width: 100%;
    margin-bottom: 20px;
    font-weight: 400;
  }
  
  footer {
    margin: 0;
    padding: 50px 25px;
    text-align: center;
    background-color: #2e3131;
    color: white;
  }
  
  footer .icons a {
    margin: 0 5px;
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
  
  footer .copyright {
    padding-top: 15px;
    font-size: 14px;
  }

  #disqus_thread {
    max-width: 800px;
    margin: -30px auto 60px;
    width: calc(100% - 30px);
  }

  .subscribe {
    margin-bottom: 30px;
    text-align: center;
  }

  .subscribe .input {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }

  .subscribe p, .subscribe label {
    font-size: 14px;
    max-width: 600px;
  }

  .subscribe p {
    max-width: 600px;
    margin: 0 auto 30px;
  }

  footer .copyright a {
    font-size: 14px;
  }
  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 99;
    top: 0;
  }
  
  header #left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
  }

  #mobile-nav-container.hide {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .desktop {
      display: none!important;
    }
  }

  @media only screen and (min-width: 768px) {
    .mobile {
      display: none!important;
    }
  }

  #mobile-nav-container {
    position: fixed;
    height: calc(100vh - 73px);
    top: 73px;
    background-color: rgba(0, 0, 0, 0.48);
    width: 100vw;
    left: 0;
  }

  #hamburger {
    margin-left: 5px;
    font-size: 24px;
  }

  #mobile-nav-container nav {
    height: calc(100vh - 73px);
    border-top: 1px solid #f3f3f3;
    margin-top: 0px;
    flex-direction: column;
    width: 280px;
    background-color: white;
  }

  header nav {
    display: flex;
  }
  
  #firebaseui-auth-container {
    display:none;
  }

  .login-button {
    height: 45px!important;
    margin-bottom: 30px!important;
    padding: 0 20px;
  }

  #logo-text {
    line-height: 73px;
    padding: 0 15px 0 7px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
  }

  nav.desktop {
    border-left: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
  }

  .logout-button {
    height: 45px!important;
    padding: 0 20px;
    background-color: #d32f2f!important;
    margin: 0 auto 30px!important;
  }
  
  .nav-item {
    text-transform: none;
    text-decoration: none;
    color: #202124;    
    padding: 20px 15px;
    margin: 0;
  }
  
  .logo {
    width: 45px;
    margin-right: 15px;
  }
  
  #user-profile {
    border-radius: 50%;
    margin: 0 auto 30px;
  }
  
  #new-comment {
    padding-bottom: 20px;
  }
  
  form label {
    font-weight: 600;
    line-height: 30px;
  }
  
  .button {
    border-radius: 4px;
    height: 40px;
    background-color: #1976d2;
    color: white;
    min-width: 100px;
    margin: 0;
    cursor: pointer;
    border: none;
  }
  
  .text {
    margin: 15px 0 0;
    font-weight: 400;
    font-size: 18px;
    color: black;
    line-height: 1.8em;
  }
  
  .article-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 430px;
    max-width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    margin: 7.5px;
  }
  
  .article-card a {
    text-transform: none;
    text-decoration: none;
  }
  
  .article-card-title, .category-container h2 {
    margin: 0 15px;
    font-size: 24px;
    color: #202124;
  }
  
  .article-card-description {
    padding: 15px 15px;
    margin: 0;
    line-height: 1.8em;
    height: 160px;
    overflow: hidden;
  }
  
  .article-card-categories {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 15px 15px -15px;
  }
  
  .article-card-image {
    width: auto;
    max-height: 400px;
    margin: 0 0 20px;
    max-width: 100%;
    height: auto;
  }
  
  .article-card .meta {
    padding: 15px 15px 0;
  }
  
  .article-card .meta i, .post-meta i {
    color: #024d40;
    margin-right: 5px;
  }
  
  .read-more-area {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
  }
  
  .read-more {
    line-height: 40px;
    text-decoration: none;
    text-align: center;
    margin: 10px;
    width: calc(100% - 20px);
  }
  
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
    width: calc(100% + 15px);
    margin-left: -7.5px;
  }
  
  .post-top,
  .post-container {
    margin-left: auto;
    margin-right: auto;
  }
  
  .post-top {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 25px;
    margin-bottom: 60px;
    border-top: 2px solid #1976d2;
    max-width: calc(800px - 50px);
  }
  
  .post-top h1 {
    padding: 15px 0;
    word-break: break-word;
  }
  
  .post-top .text {
    margin: 30px 0;s
    word-break: break-word;
  }
  
  .post-container > p,
  .post-container > h3 {
    margin-bottom: 30px;
  }
  
  .post-container {
    max-width: 800px;
  }
  
  .post-container .content-text {
    margin: 40px 0;
  }
  
  .post-container .content-text a {
    font-weight: 400;
    font-size: 18px;
  }
  
  .post-container .sisalto-kuva {
    width: 100%;
    height: auto;
  }
  
  .post-container h2 {
    font-size: 30px;
    color: #202124;
    margin: 80px 0 40px;
  }
  
  .post-container h3 {
    padding: 35px 0 20px;
    font-size: 24px;
    color: #202124;
  }
  
  .post-container .kuva-teksti {    
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    margin-bottom: 15px;
    padding: 10px;
    margin-top: -8px;
  }
  
  .post-category-container {
    margin: 0px auto 80px auto!important;
  }
  
  .post-image-container {
    max-width: 800px; 
    margin: -20px auto 30px;
  }
  
  .post-image {
    width: 100%;
    height: auto;
  }
  
  .post-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .post-meta p {
    line-height: 1.2em;
  }

  #post-meta-top {
    padding-top: 20px;
  }
  
  #post-meta-bottom {
    border-bottom: 1px solid #d8d9d9;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  .author-info {
    font-style: italic;
      max-width: 500px;
  }
  
  .post-meta div {
    display: flex;
    align-items: center;
  }
  
  .author-image {
    width: 40px;
    border-radius: 50%;
  }
  
  .post-meta .author-name {
    margin: 0 15px;
  }
  
  .category-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: calc(100% - 30px);
    margin: auto;
  }
  
  .category-container h2 {
    margin: 50px 0 25px;
    font-size: 30px;
    padding-bottom: 30px;
  }
  
  .categories {
    display: flex;
    width: 800px;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .category {
    background-color: rgba(32,33,36,0);
    border: 1px solid rgba(32,33,36,0.16);
    border-radius: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #202124;
    display: block;
    margin: 0 8px 12px 0;
    overflow: hidden;
    padding: 0 12px;
    text-decoration: none;
    -webkit-transition: background-color .2s,border .2s;
    transition: background-color .2s,border .2s;
    text-decoration: none;
    text-transform: none;
  }

  #google-sense {
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin: 0 auto 50px;
    border-top: 2px solid #1976d2;
    width: calc(800px - 50px);
    max-width: calc(100% - 80px);
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  }

  #sponsor {
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin: -70px auto 50px;
    border-top: 2px solid #1976d2;
    width: calc(800px - 50px);
    max-width: calc(100% - 80px);
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  }

  #sponsor h2, #google-sense h2, #community-container h2 {
    margin: 0 0 30px;    
    border-bottom: 1px solid #d8d9d9;
    padding-bottom: 25px;
    font-size: 30px;
    color: #202124;
    word-break: break-word;
  }

  #community-container h2 {
    margin-bottom: 15px;
  }

  #sponsor-info {
    display: flex;
    flex-wrap: wrap;
  }

  #sponsor-info img {
    flex: 1;
    min-width: 250px;
    height: 100%;
    padding: 15px;
    margin: -15px 0 0 -15px;
  }

  #sponsor-info p {
    flex: 2;
    max-width: 500px;
    min-width: 300px;
    max-width: 365px;
    margin: 0;
    line-height: 1.6em;
    margin-top: 15px;
  }
  
  .nav-item:hover, .category:hover {
    background-color: #f3f3f3;
  }
  
  .about-container {
    display: flex;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-bottom: 30px;
  }
  
  .about-content {
    padding: 10px;
    flex: 1;
    font-style: italic;
  }
  
  .about-author .author-name {
    font-size: 12px;
      font-weight: bold;
      padding-top: 10px;
  }
  
  .about-author {
    text-align: center;
    border-right: 2px solid #024d40;
    padding: 10px;
    margin-right: 10px;
    width: 100px;
  }
  
  li {
    font-weight: 400;
    margin: 0 20px;
  }
  
  .about-area {
    max-width: 800px; 
    margin: 60px auto;
  }
  
  .about-content .content-text {
    font-size: 15px;
  }
  
  #community-container {
    margin: auto;
    padding: 25px;
    margin-bottom: 60px;
    border-top: 2px solid #1976d2;
    max-width: calc(800px - 50px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding-bottom: 0;
  }
  
  #community-container .comments {
    margin-top: 20px;
  }
  
  #community-container #comments-container .comment-button {
    text-decoration: none;
    text-align: center;
    padding: 0 20px;
  }
  
  #community-container #comments-container textarea {
    width: 100%;
    height: 100px;
  }
  
  #community-container .comments .comment {
    display: flex;
    border-top: 1px solid #dbdcdc;
    padding: 20px 0;
  }
  
  #community-container .comments .comment .commentRight {
    padding-left: 10px;
  }
  
  #community-container .comments .comment .commentRight .commentText {
    padding-top: 10px;
  }
  
  #community-container .comments .comment .commentImage {
    width: 40px;
    border-radius: 50%;
  }
  
  .related-articles-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: calc(100% - 15px);
    margin: auto;
  }
  
  .related-article-title{
    font-size: 30px;
    color: #202124;
    padding-bottom: 50px;
    text-align: center;
  }
  
  .related-articles {
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .logged-in {
    display: none;
  }
`;

export {
    css
}