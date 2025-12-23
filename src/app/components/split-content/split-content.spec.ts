import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitContent } from './split-content';

describe('SplitContent', () => {
  let component: SplitContent;
  let fixture: ComponentFixture<SplitContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
