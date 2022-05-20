import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { ViewUserComponent } from "./components/view-user/view-user.component";
import { UsersComponent } from "./users.component";


const routes: Routes = [
	{
		path: "", component: UsersComponent, children: [
			{
				path: "new", component: AddUserComponent
			},
			{
				path: "all", component: ViewUserComponent
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class UsersRoutingModule { }