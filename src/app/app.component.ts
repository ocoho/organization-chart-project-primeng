import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'organization-chart-project';
  data: TreeNode[] = [
    {
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'Argentina',
                expanded: true,
                children: [
                    {
                        label: 'Argentina'
                    },
                    {
                        label: 'France'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                children: [
                    {
                        label: 'France',
                        children: [{
                          label:''
                        }]
                    },
                    {
                        label: 'Morocco'
                    }
                ]
            }
        ]
    }
];

onExpandEvent(event: any){

  this.loadChildren().then((data:any) => {
    event.node.children =data;
  })

}
 public async loadChildren() {
    return [{
      label: 'test'
    },
    {
      label: 'deuxiemeTest'
    }]
  }
}
