import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../_models/menu-item';
import { ModuloService } from '../../_services/mantenimiento/modulo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rolModules: any[] = [];
  menuDinamic: any[] = [];
  subMenuDinamic: any[] = []
  menuItems: MenuItem[] = [
    {
      name: 'Mantenimiento', icon: 'menu', route: '', items: [
        { name: 'Roles', icon: '', route: 'rols', items: [] },
        { name: 'Users', icon: '', route: 'users', items: [] },
      ]
    },
    // {
    //    name: 'Disponibles', icon: 'menu', route: '', items: [
    //      { name: '#', icon: '', route: '', items: [] }
    //    ]
    // }
  ];
  constructor(private mod: ModuloService,) { }

  ngOnInit(): void {
    // this.mod.getMenu().subscribe((res: MenuItem[]) => {
    //   this.menuItems = res;
    // }, (err) => {
    //   console.log(err);
    // });
  }

  showMenuItem(menuItem): boolean {
    return true;
  }

  /**
   * Show submenu options from the selected menu
   * @param index selected menu index
   */
  showSubMenu(index: number) {
    if (this.menuItems[index].showSubMenu) {
      this.menuItems[index].showSubMenu = false;
    } else {
      this.menuItems[index].showSubMenu = true;
    }
  }

}
