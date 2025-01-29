import { Component } from '@angular/core';
import { UserProfileComponent } from "../../auth/components/user-profile/user-profile.component";

@Component({
  selector: 'app-homepage',
  imports: [],
  template: `
    <div class="homepage">
      <h1>Welcome to My App!</h1>
      <p>This is the homepage. Please log in to access your profile.</p>
    </div>
  `,
  styles: ``
})
export class HomepageComponent {

}
