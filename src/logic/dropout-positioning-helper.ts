/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  DropoutPlacement,
  DropoutContainerCoordinates,
  DropoutTriggerElementDimensions,
  DropoutViewPortDimensions, DropoutOutletDimensions,
} from '../components/dropout.model';

export class DropoutPositioningHelper {

  /**
   * The triggerElement and the dropout container are placed inside the viewPort.
   * We need to calculate the containerCoordinates based on several conditions.
   */
  public static calculate(placement: DropoutPlacement,
                          trigger: DropoutTriggerElementDimensions,
                          viewPort: DropoutViewPortDimensions,
                          outlet: DropoutOutletDimensions): DropoutContainerCoordinates {
    const ret = new DropoutContainerCoordinates();
    const vAutoLeftRight= () => {
      if (trigger.y < viewPort.height * 0.5) {
        ret.top = trigger.y + trigger.height;
      } else {
        ret.bottom = (-1) * trigger.y;
      }
    };
    const leftRightVAuto = () => {
      if (trigger.y < viewPort.height * 0.5) {
        ret.top = trigger.y;
      } else {
        ret.bottom = (-1) * (trigger.y + trigger.height);
      }
    };
    const hAuto = () => {
      if (trigger.x < viewPort.width * 0.5) {
        ret.left = trigger.x + trigger.width;
      } else {
        ret.right = viewPort.width - trigger.x;
      }
    };
    if (placement === DropoutPlacement.DOWN_LEFT) {
      ret.left = trigger.x;
      ret.top = trigger.y + trigger.height;
    } else if (placement === DropoutPlacement.DOWN_RIGHT) {
      ret.right = viewPort.width - trigger.x - trigger.width;
      ret.top = trigger.y + trigger.height;
    } else if (placement === DropoutPlacement.UP_LEFT) {
      ret.left = trigger.x;
      ret.bottom = (-1) * trigger.y;
    } else if (placement === DropoutPlacement.UP_RIGHT) {
      ret.right = viewPort.width - trigger.x - trigger.width;
      ret.bottom = (-1) * trigger.y;
    } else if (placement === DropoutPlacement.VAUTO_LEFT) {
      ret.left = trigger.x;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.VAUTO_RIGHT) {
      ret.right = viewPort.width - trigger.x - trigger.width;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.DOWN_CENTER) {
      ret.left = trigger.x + trigger.width / 2;
      ret.top = trigger.y + trigger.height;
    } else if (placement === DropoutPlacement.UP_CENTER) {
      ret.left = trigger.x + trigger.width / 2;
      ret.bottom = (-1) * (trigger.y);
    } else if (placement === DropoutPlacement.VAUTO_CENTER) {
      ret.left = trigger.x + trigger.width / 2;
      vAutoLeftRight();
    } else if (placement === DropoutPlacement.LEFT_TOP) {
      ret.right = viewPort.width - trigger.x;
      ret.top = trigger.y;
    } else if (placement === DropoutPlacement.LEFT_BOTTOM) {
      ret.right = viewPort.width - trigger.x;
      ret.bottom = (-1) * (trigger.y + trigger.height);
    } else if (placement === DropoutPlacement.LEFT_VAUTO) {
      ret.right = viewPort.width - trigger.x;
      leftRightVAuto();
    } else if (placement === DropoutPlacement.RIGHT_TOP) {
      ret.left = trigger.x + trigger.width;
      ret.top = trigger.y;
    } else if (placement === DropoutPlacement.RIGHT_BOTTOM) {
      ret.left = trigger.x + trigger.width;
      ret.bottom = (-1) * (trigger.y + trigger.height);
    } else if (placement === DropoutPlacement.RIGHT_VAUTO) {
      ret.left = trigger.x + trigger.width;
      leftRightVAuto();
    } else if (placement === DropoutPlacement.LEFT_CENTER) {
      ret.right = viewPort.width - trigger.x;
      ret.top = trigger.y + trigger.height / 2;
    } else if (placement === DropoutPlacement.RIGHT_CENTER) {
      ret.left = trigger.x + trigger.width;
      ret.top = trigger.y + trigger.height / 2;
    } else if (placement === DropoutPlacement.HAUTO_CENTER) {
      hAuto();
      ret.top = trigger.y + trigger.height / 2;
    } else if (placement === DropoutPlacement.FIX_TOP_LEFT) {
      ret.top = 0;
      ret.left = 0;
    } else if (placement === DropoutPlacement.FIX_TOP_RIGHT) {
      ret.top = 0;
      ret.right = 0;
    } else if (placement === DropoutPlacement.FIX_BOTTOM_LEFT) {
      ret.bottom = (-1) * viewPort.height;
      ret.left = 0;
    } else if (placement === DropoutPlacement.FIX_BOTTOM_RIGHT) {
      ret.bottom = (-1) * viewPort.height;
      ret.right = 0;
    }

    //
    // ADJUST TO OFFSET OUTLET
    //
    if (ret.left !== undefined) {
      ret.left = ret.left - outlet.x;
    }
    if (ret.top !== undefined) {
      ret.top = ret.top - outlet.y;
    }
    if (ret.right !== undefined) {
      const offsetRight = viewPort.width - outlet.x - outlet.width;
      ret.right = ret.right - offsetRight;
    }
    if (ret.bottom !== undefined) {
      const offsetBottom = outlet.y - outlet.height;
      ret.bottom = ret.bottom + offsetBottom;
    }
    return ret;
  }
}
