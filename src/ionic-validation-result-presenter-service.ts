import { PLATFORM } from 'aurelia';
import { ValidationResult } from '@aurelia/validation';
import { ValidationEvent, ValidationResultsSubscriber, ValidationResultTarget } from '@aurelia/validation-html';

const resultIdAttribute = 'validation-result-id';
const resultContainerAttribute = 'validation-result-container';
const resultContainerClass = 'validation-area';

export class IonicValidationResultPresenterService implements ValidationResultsSubscriber {
  public slot = 'end';

  public handleValidationEvent(event: ValidationEvent): void {
    for (const [target, results] of this.reverseMap(event.removedResults)) {
      this.remove(target, results);
    }

    for (const [target, results] of this.reverseMap(event.addedResults)) {
      this.add(target, results);
    }
  }

  public remove(target: Element, results: ValidationResult[]) {
    const messageContainer = this.getValidationMessageContainer(target);
    if (messageContainer === null) {
      return;
    }
    this.removeResults(messageContainer, results);
  }

  public add(target: Element, results: ValidationResult[]) {
    if (results.every((x) => x.valid)) return;
    const messageContainer = this.getValidationMessageContainer(target);
    if (messageContainer === null) {
      return;
    }
    this.showResults(messageContainer, results);
  }

  public getValidationMessageContainer(target: Element): HTMLElement | null {
    while (target.parentElement && target.parentElement.tagName !== 'ION-ITEM') {
      target = target.parentElement as Element;
    }

    const parent = target.parentElement;

    if (parent === null) {
      return null;
    }
    let messageContainer = parent.nextElementSibling as HTMLElement | null;
    if (messageContainer?.tagName !== 'ION-ITEM' || !messageContainer.attributes.getNamedItem(resultContainerAttribute)) {
      messageContainer = null;
    }
    if (messageContainer === null) {
      messageContainer = PLATFORM.document.createElement('ion-item') as HTMLElement;
      const div = PLATFORM.document.createElement('div') as HTMLElement;
      div.slot = this.slot;
      div.classList.add(resultContainerClass);
      messageContainer.setAttribute('style', `${messageContainer.getAttribute('style') ?? ''};--min-height:0;margin-top:5px;`);
      messageContainer.setAttribute(resultContainerAttribute, '');
      messageContainer.append(div);
      messageContainer.style.color = 'var(--ion-color-danger)';
      messageContainer.style.textAlign = 'right';
      messageContainer.setAttribute('lines', 'none');
      parent.parentElement?.insertBefore(messageContainer, parent.nextElementSibling);
    }

    return messageContainer;
  }

  public showResults(messageContainer: HTMLElement, results: ValidationResult[]) {
    messageContainer.firstElementChild?.append(
      ...results.reduce((acc: Element[], result) => {
        if (!result.valid) {
          const span = PLATFORM.document.createElement('span');
          span.setAttribute(resultIdAttribute, result.id.toString());
          span.textContent = result.message ?? '';
          acc.push(span);
        }
        return acc;
      }, []),
    );
  }

  public removeResults(messageContainer: HTMLElement, results: ValidationResult[]) {
    for (const result of results) {
      if (!result.valid) {
        messageContainer.remove();
      }
    }
  }

  private reverseMap(results: ValidationResultTarget[]) {
    const map = new Map<Element, ValidationResult[]>();
    for (const { result, targets } of results) {
      for (const target of targets) {
        let targetResults = map.get(target);
        if (targetResults === void 0) {
          map.set(target, (targetResults = []));
        }
        targetResults.push(result);
      }
    }
    return map;
  }
}
