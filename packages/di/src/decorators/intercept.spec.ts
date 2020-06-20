import {Store} from "@tsed/core";
import {IInterceptor, IInterceptorContext, InjectablePropertyType, Intercept} from "../../src";
import {INJECTABLE_PROP} from "../constants";

describe("@Intercept", () => {
  it("should store metadata", () => {
    // GIVEN
    class TestInterceptor implements IInterceptor {
      intercept(ctx: IInterceptorContext<any>) {
        return "";
      }
    }

    // WHEN
    class TestService {
      @Intercept(TestInterceptor, {options: "options"})
      test() {}
    }

    // THEN
    const injectableProperties = Store.from(TestService).get(INJECTABLE_PROP);
    injectableProperties.test.bindingType.should.eq(InjectablePropertyType.INTERCEPTOR);
    injectableProperties.test.useType.should.eq(TestInterceptor);
    injectableProperties.test.options.should.deep.eq({options: "options"});
    injectableProperties.test.propertyKey.should.eq("test");
  });
});
