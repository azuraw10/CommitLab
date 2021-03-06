﻿var datesViewModel = new DatesViewModel();
var userNameViewModel = new UserNameViewModel();
var branchNameViewModel = new BranchNameViewModel();
var repositoryNameViewModel = new RepositoryNameViewModel();
var calendarViewModel = new CalendarViewModel(new ChangesetFilter());
var commitsViewModel = new CommitsViewModel();
var userName = new UserName();

$.ajax({
  url: '/api/changeset/usernames',
  dataType: 'json',
  async: false,
  success: function (data, status) {
    userNameViewModel.loadUserNameList(data);
  }
});


$.getJSON('/api/changeset/branchnames', function (data, status) {
    branchNameViewModel.loadBranchNameList(data);
});

$.getJSON('/api/changeset/repositorynames', function (data, status) {
    repositoryNameViewModel.loadRepositoryNameList(data);
});

ko.applyBindings(calendarViewModel, document.getElementById('calendarViewModel'));
ko.applyBindings(commitsViewModel, document.getElementById('commitsViewModel'));
ko.applyBindings(userName, document.getElementById('userName'));