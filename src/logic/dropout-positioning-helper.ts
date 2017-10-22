/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  DropoutPlacement,
  DropoutContainerCoordinates,
  DropoutTriggerElementDimensions,
  DropoutViewPortDimensions,
} from '../components/dropout.model';

export class DropoutPositioningHelper {

  /**
   * The triggerElement and the dropout container are placed inside the viewPort.
   * We need to calculate the containerCoordinates based on several conditions.
   *
   * @param {DropoutPlacement} placement
   * @param {DropoutTriggerElementDimensions} triggerElementDimensions
   * @param {DropoutViewPortDimensions} viewPortDimensions
   * @returns {DropoutContainerCoordinates}
   */
  public static calculate(placement: DropoutPlacement,
                          triggerElementDimensions: DropoutTriggerElementDimensions,
                          viewPortDimensions: DropoutViewPortDimensions): DropoutContainerCoordinates {
    const ret = new DropoutContainerCoordinates();
    const vAutoLeftRight= () => {
      if (triggerElementDimensions.y < viewPortDimensions.height * 0.5) {
        ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
      } else {
        ret.bottom = (-1) * triggerElementDimensions.y;
      }
    };
    const leftRightVAuto = () => {
      if (triggerElementDimensions.y < viewPortDimensions.height * 0.5) {
        ret.top = triggerElementDimensions.y;
      } else {
        ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
      }
    };
    const hAuto = () => {
      if (triggerElementDimensions.x < viewPortDimensions.width * 0.5) {
        ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
      } else {
        ret.right = viewPortDimensions.width - triggerElementDimensions.x;
      }
    };
    if (placement === DropoutPlacement.DOWN_LEFT) {
      ret.left = triggerElementDimensions.x;
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
    } else if (placement === DropoutPlacement.DOWN_RIGHT) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
    } else if (placement === DropoutPlacement.UP_LEFT) {
      ret.left = triggerElementDimensions.x;
      ret.bottom = (-1) * triggerElementDimensions.y;
    } else if (placement === DropoutPlacement.UP_RIGHT) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
      ret.bottom = (-1) * triggerElementDimensions.y;
    } else if (placement === DropoutPlacement.VAUTO_LEFT) {
      ret.left = triggerElementDimensions.x;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.VAUTO_RIGHT) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.DOWN_CENTER) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
    } else if (placement === DropoutPlacement.UP_CENTER) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
      ret.bottom = (-1) * (triggerElementDimensions.y);
    } else if (placement === DropoutPlacement.VAUTO_CENTER) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.LEFT_TOP) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x;
      ret.top = triggerElementDimensions.y;
    } else if (placement === DropoutPlacement.LEFT_BOTTOM) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x;
      ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
    } else if (placement === DropoutPlacement.LEFT_VAUTO) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x;
      leftRightVAuto();
    } else if (placement === DropoutPlacement.RIGHT_TOP) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
      ret.top = triggerElementDimensions.y;
    } else if (placement === DropoutPlacement.RIGHT_BOTTOM) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
      ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
    } else if (placement === DropoutPlacement.RIGHT_VAUTO) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
      leftRightVAuto();
    } else if (placement === DropoutPlacement.LEFT_CENTER) {
      ret.right = viewPortDimensions.width - triggerElementDimensions.x;
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
    } else if (placement === DropoutPlacement.RIGHT_CENTER) {
      ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
    } else if (placement === DropoutPlacement.HAUTO_CENTER) {
      hAuto();
      ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
    } else if (placement === DropoutPlacement.FIX_TOP_LEFT) {
      ret.top = 0;
      ret.left = 0;
    } else if (placement === DropoutPlacement.FIX_TOP_RIGHT) {
      ret.top = 0;
      ret.right = 0;
    } else if (placement === DropoutPlacement.FIX_BOTTOM_LEFT) {
      ret.bottom = (-1) * viewPortDimensions.height;
      ret.left = 0;
    } else if (placement === DropoutPlacement.FIX_BOTTOM_RIGHT) {
      ret.bottom = (-1) * viewPortDimensions.height;
      ret.right = 0;
    }

    return ret;
  }
}
