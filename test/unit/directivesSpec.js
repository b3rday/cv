'use strict';

/* jasmine specs for directives go here */

describe('Unit testing', function() {
    var $compile,
        $httpBackend,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('cvApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$httpBackend_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    describe("experience", function() {
        var experienceTemplate = function() {
                return "<section><h1>Professional Experience</h1></section>";
            },
            experienceData = function() {
                return [{
                    "abbreviation": "classroom",
                    "company": "Classroom Publications Limited",
                    "location": "Hong Kong",
                    "start_date": "2012-09-26",
                    "end_date": "2016-02-26",
                    "url": "classroom.com.hk",
                    "role": "Web Programmer for an ever expanding number of projects including <a href=\"http://classroom.com.hk/students\" target=\"_blank\">eMagazine</a>, <a href=\"http://classroom.com.hk/idiomworld\" target=\"_blank\">Idiom World</a>, <a href=\"http://pinkos.com.hk\"target=\"_blank\">Pink Office Solution</a> and more.",
                    "skill": "Applications are developed using ASP.NET MVC and Web Forms with C#, PHP, HTML5, CSS3, javascript, jQuery and Bootstrap. Most of the time I lead the development of the project with our manager and designer. I use Visual Studio as IDE. I use MS SQL Server, MySQL and MS Access as database, and I develop web service to communicate between the database and the application. TSQL written in store procedure is often used to increase the performance and readability of the web service."
                }];
            };

        beforeEach(function() {
            $httpBackend.expectGET('partials/cv-experience.html').respond(experienceTemplate());
            $httpBackend.expectGET('data/experiences.json').respond(experienceData());
        });

        it('Replaces the element with the appropriate content', function() {
            // Compile a piece of HTML containing the directive
            var element = $compile("<cv-experience></cv-experience>")($rootScope);
            // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
            //$rootScope.$digest();
            $httpBackend.flush();
            // Check that the compiled element contains the templated content
            expect(element.html()).toContain("Professional Experience");

        });
    });

    describe("skill", function() {
        var skillTemplate = function() {
                return "<section><h1>Skills</h1></section>";
            },
            skillData = function() {
                return [{
                    "abbreviation": "code",
                    "name": "Web Development Languages",
                    "items": ["ASP.NET MVC and Web Forms", "C#", "Html", "CSS", "Javascript", "jQuery", "Bootstrap", "AngularJs", "NodeJS", "Jasmine", "Protractor"]
                }];
            };

        beforeEach(function() {
            $httpBackend.expectGET('partials/cv-skill.html').respond(skillTemplate());
            $httpBackend.expectGET('data/skills.json').respond(skillData());
        });

        it('Replaces the element with the appropriate content', function() {
            // Compile a piece of HTML containing the directive
            var element = $compile("<cv-skill></cv-skill>")($rootScope);
            // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
            //$rootScope.$digest();
            $httpBackend.flush();
            // Check that the compiled element contains the templated content
            expect(element.html()).toContain("Skills");

        });
    });
});
