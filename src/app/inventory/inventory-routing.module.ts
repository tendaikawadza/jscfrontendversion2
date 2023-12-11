import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorydashboardComponent } from './inventorydashboard/inventorydashboard.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';

const routes: Routes = [

  {path:'centralInventory', component:CentralInventoryComponent},
  {path:'proviancialInventory', component:ProvincialinventoryComponent},
    {path:'', component:InventorydashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
