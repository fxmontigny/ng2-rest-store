/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
beforeEach(function () {
    jasmine.addMatchers({
        toHaveText: function () {
            return {
                compare: function (actual, expectedText) {
                    var actualText = actual.textContent;
                    return {
                        pass: actualText === expectedText,
                        get message() {
                            return 'Expected ' + actualText + ' to equal ' + expectedText;
                        }
                    };
                }
            };
        },
        toContainText: function () {
            return {
                compare: function (actual, expectedText) {
                    var actualText = actual.textContent;
                    return {
                        pass: actualText.indexOf(expectedText) > -1,
                        get message() {
                            return 'Expected ' + actualText + ' to contain ' + expectedText;
                        }
                    };
                }
            };
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3RpbmctdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBY2xFLFVBQVUsQ0FBQztJQUNQLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFaEIsVUFBVSxFQUFFO1lBQ1IsTUFBTSxDQUFDO2dCQUNILE9BQU8sRUFBRSxVQUFTLE1BQVcsRUFBRSxZQUFpQjtvQkFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDcEMsTUFBTSxDQUFDO3dCQUNILElBQUksRUFBRSxVQUFVLEtBQUssWUFBWTt3QkFDakMsSUFBSSxPQUFPOzRCQUNQLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7d0JBQ2xFLENBQUM7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2FBQ0osQ0FBQztRQUNOLENBQUM7UUFFRCxhQUFhLEVBQUU7WUFDWCxNQUFNLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVMsTUFBVyxFQUFFLFlBQWlCO29CQUM1QyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNwQyxNQUFNLENBQUM7d0JBQ0gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLE9BQU87NEJBQ1AsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsY0FBYyxHQUFHLFlBQVksQ0FBQzt3QkFDcEUsQ0FBQztxQkFDSixDQUFDO2dCQUNOLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvamFzbWluZS9pbmRleC5kLnRzXCIgLz5cblxuLypcbiBUZW1wb3JhcnkgZmlpbGUgZm9yIHJlZmVyZW5jaW5nIHRoZSBUeXBlU2NyaXB0IGRlZnMgZm9yIEphc21pbmUgKyBzb21lIHBvdGVudGlhbGx5XG4gdXRpbHMgZm9yIHRlc3RpbmcuIFdpbGwgY2hhbmdlL2FkanVzdCB0aGlzIG9uY2UgSSBmaW5kIGEgYmV0dGVyIHdheSBvZiBkb2luZ1xuICovXG5cbmRlY2xhcmUgbW9kdWxlIGphc21pbmUge1xuICAgIGludGVyZmFjZSBNYXRjaGVycyB7XG4gICAgICAgIHRvSGF2ZVRleHQodGV4dDogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgdG9Db250YWluVGV4dCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIH1cbn1cblxuYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamFzbWluZS5hZGRNYXRjaGVycyh7XG5cbiAgICAgICAgdG9IYXZlVGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbDogYW55LCBleHBlY3RlZFRleHQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0dWFsVGV4dCA9IGFjdHVhbC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3M6IGFjdHVhbFRleHQgPT09IGV4cGVjdGVkVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRXhwZWN0ZWQgJyArIGFjdHVhbFRleHQgKyAnIHRvIGVxdWFsICcgKyBleHBlY3RlZFRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0NvbnRhaW5UZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsOiBhbnksIGV4cGVjdGVkVGV4dDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWxUZXh0ID0gYWN0dWFsLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzczogYWN0dWFsVGV4dC5pbmRleE9mKGV4cGVjdGVkVGV4dCkgPiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRXhwZWN0ZWQgJyArIGFjdHVhbFRleHQgKyAnIHRvIGNvbnRhaW4gJyArIGV4cGVjdGVkVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=