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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3RpbmctdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBY2xFLFVBQVUsQ0FBQztJQUNQLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFaEIsVUFBVSxFQUFFO1lBQ1IsTUFBTSxDQUFDO2dCQUNILE9BQU8sRUFBRSxVQUFTLE1BQVcsRUFBRSxZQUFpQjtvQkFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDcEMsTUFBTSxDQUFDO3dCQUNILElBQUksRUFBRSxVQUFVLEtBQUssWUFBWTt3QkFDakMsSUFBSSxPQUFPOzRCQUNQLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7d0JBQ2xFLENBQUM7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2FBQ0osQ0FBQztRQUNOLENBQUM7UUFFRCxhQUFhLEVBQUU7WUFDWCxNQUFNLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVMsTUFBVyxFQUFFLFlBQWlCO29CQUM1QyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNwQyxNQUFNLENBQUM7d0JBQ0gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLE9BQU87NEJBQ1AsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsY0FBYyxHQUFHLFlBQVksQ0FBQzt3QkFDcEUsQ0FBQztxQkFDSixDQUFDO2dCQUNOLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvamFzbWluZS9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8qXHJcbiBUZW1wb3JhcnkgZmlpbGUgZm9yIHJlZmVyZW5jaW5nIHRoZSBUeXBlU2NyaXB0IGRlZnMgZm9yIEphc21pbmUgKyBzb21lIHBvdGVudGlhbGx5XHJcbiB1dGlscyBmb3IgdGVzdGluZy4gV2lsbCBjaGFuZ2UvYWRqdXN0IHRoaXMgb25jZSBJIGZpbmQgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nXHJcbiAqL1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgamFzbWluZSB7XHJcbiAgICBpbnRlcmZhY2UgTWF0Y2hlcnMge1xyXG4gICAgICAgIHRvSGF2ZVRleHQodGV4dDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICB0b0NvbnRhaW5UZXh0KHRleHQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgamFzbWluZS5hZGRNYXRjaGVycyh7XHJcblxyXG4gICAgICAgIHRvSGF2ZVRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsOiBhbnksIGV4cGVjdGVkVGV4dDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdHVhbFRleHQgPSBhY3R1YWwudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzczogYWN0dWFsVGV4dCA9PT0gZXhwZWN0ZWRUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRXhwZWN0ZWQgJyArIGFjdHVhbFRleHQgKyAnIHRvIGVxdWFsICcgKyBleHBlY3RlZFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvQ29udGFpblRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsOiBhbnksIGV4cGVjdGVkVGV4dDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdHVhbFRleHQgPSBhY3R1YWwudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzczogYWN0dWFsVGV4dC5pbmRleE9mKGV4cGVjdGVkVGV4dCkgPiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0V4cGVjdGVkICcgKyBhY3R1YWxUZXh0ICsgJyB0byBjb250YWluICcgKyBleHBlY3RlZFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXX0=