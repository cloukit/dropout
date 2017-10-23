/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { expect } from 'chai';
import { DropoutPositioningHelper } from './dropout-positioning-helper';
import {
  DropoutOutletDimensions,
  DropoutPlacement, DropoutTriggerElementDimensions,
  DropoutViewPortDimensions,
} from '../components/dropout.model';

describe('dropout-position-helper', () => {

  describe('outlet at x=0 and y=0', () => {
    const viewPort = new DropoutViewPortDimensions(1920, 1080);
    const outletDimensions = new DropoutOutletDimensions(0, 0);

    it('should be correctly placed for DOWN_LEFT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.DOWN_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(200);
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for DOWN_RIGHT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.DOWN_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(1570);
    });

    it('should be correctly placed for UP_LEFT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.UP_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(200);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-300);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for UP_RIGHT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.UP_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-300);
      expect(coordinates.right).to.be.equal(1570);
    });

    it('should be correctly placed for VAUTO_LEFT and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(200);
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for VAUTO_LEFT and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(200);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-600);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for VAUTO_RIGHT and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(1570);
    });

    it('should be correctly placed for VAUTO_RIGHT and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-600);
      expect(coordinates.right).to.be.equal(1570);
    });

    it('should be correctly placed for DOWN_CENTER', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.DOWN_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(275);
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for UP_CENTER', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.UP_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(275);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-300);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for VAUTO_CENTER and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(275);
      expect(coordinates.top).to.be.equal(340);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for VAUTO_CENTER and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.VAUTO_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(275);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-600);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for LEFT_TOP', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.LEFT_TOP, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(300);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(1720);
    });

    it('should be correctly placed for LEFT_BOTTOM', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.LEFT_BOTTOM, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-340);
      expect(coordinates.right).to.be.equal(1720);
    });

    it('should be correctly placed for LEFT_VAUTO and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.LEFT_VAUTO, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(300);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(1720);
    });

    it('should be correctly placed for LEFT_VAUTO and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.LEFT_VAUTO, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-640);
      expect(coordinates.right).to.be.equal(1720);
    });

    it('should be correctly placed for RIGHT_TOP', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.RIGHT_TOP, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.equal(300);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for RIGHT_BOTTOM', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.RIGHT_BOTTOM, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-340);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for RIGHT_VAUTO and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.RIGHT_VAUTO, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.equal(300);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for RIGHT_VAUTO and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.RIGHT_VAUTO, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-640);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for LEFT_CENTER', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.LEFT_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(320);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(1720);
    });

    it('should be correctly placed for RIGHT_CENTER', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.RIGHT_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.equal(320);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for HAUTO_CENTER and triggerElement in upper half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.HAUTO_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.equal(320);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for HAUTO_CENTER and triggerElement in lower half of viewport', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 600, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.HAUTO_CENTER, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(350);
      expect(coordinates.top).to.be.equal(620);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for FIX_TOP_LEFT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.FIX_TOP_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(0);
      expect(coordinates.top).to.be.equal(0);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for FIX_TOP_RIGHT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.FIX_TOP_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.equal(0);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.equal(0);
    });

    it('should be correctly placed for FIX_BOTTOM_LEFT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.FIX_BOTTOM_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(0);
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-1080);
      expect(coordinates.right).to.be.undefined;
    });

    it('should be correctly placed for FIX_BOTTOM_RIGHT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.FIX_BOTTOM_RIGHT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.undefined;
      expect(coordinates.top).to.be.undefined;
      expect(coordinates.bottom).to.be.equal(-1080);
      expect(coordinates.right).to.be.equal(0);
    });
  });

  describe('outlet at x=32 and y=35', () => {
    const viewPort = new DropoutViewPortDimensions(1920, 1080);
    const outletDimensions = new DropoutOutletDimensions(32, 35);

    it('should be correctly placed for DOWN_LEFT', async () => {
      const trigger = new DropoutTriggerElementDimensions(200, 300, 150, 40);
      const coordinates = DropoutPositioningHelper.calculate(DropoutPlacement.DOWN_LEFT, trigger, viewPort, outletDimensions);
      expect(coordinates.left).to.be.equal(168);
      expect(coordinates.top).to.be.equal(305);
      expect(coordinates.bottom).to.be.undefined;
      expect(coordinates.right).to.be.undefined;
    });

  });
});
