﻿using System.Text.RegularExpressions;
using System.Web.Mvc;

namespace CommitLab.Web.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index(string id)
    {
      var model = string.IsNullOrWhiteSpace(id) ? ParseLoginName(User.Identity.Name) : id;

      return View((object)model);
    }

    public ActionResult Search()
    {
      return View();
    }

    private string ParseLoginName(string model)
    {
      var match = Regex.Match(model, @"([A-Za-z0-9.-]+\\)?([A-Za-z0-9.]+)");
      return match.Groups[2].Value;
    }
  }
}