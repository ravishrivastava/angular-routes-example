import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:  Router
  ) { }

  ngOnInit() {
    // with observable
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(id);
      });
    // without observable
    this.route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this.router.navigate(['followers'],{
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
