using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddSave(UserModel model)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult()
                {
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                    // ContentType = "application/json",
                    Data = false
                };
            }
            //把model进行存储
            return new JsonResult() {
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
               // ContentType = "application/json",
                Data = true
            };
        }
    }
    public class UserModel
    {
        
        [Required]
        public string username { get; set; }
        [Required]
        public string realname { get; set; }
        [Required]
        public DateTime hiredate { get; set; }
        [Required]
        public string phone { get; set; }
        [Required]
        public bool state { get; set; }
    }
}