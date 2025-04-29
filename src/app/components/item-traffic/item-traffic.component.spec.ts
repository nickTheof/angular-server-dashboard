import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrafficComponent } from './item-traffic.component';

describe('ItemTrafficComponent', () => {
  let component: ItemTrafficComponent;
  let fixture: ComponentFixture<ItemTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTrafficComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
