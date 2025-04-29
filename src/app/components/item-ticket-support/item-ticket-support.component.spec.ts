import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTicketSupportComponent } from './item-ticket-support.component';

describe('ItemTicketSupportComponent', () => {
  let component: ItemTicketSupportComponent;
  let fixture: ComponentFixture<ItemTicketSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTicketSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTicketSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
