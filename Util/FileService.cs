using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Net.Http.Headers;
namespace HuRe.Util
{
    public interface IFileService
    {
        string UploadFile(IFormFile file);
    }
    public class FileService : IFileService
    {
        private IHostingEnvironment _evn;
        public FileService(IHostingEnvironment evn)
        {
            _evn = evn;
        }
        public string UploadFile(IFormFile file)
        {
            var datetime = DateTime.Now.ToString("dd_MM_yyyy_hh_mm_ss");
            var filename = datetime + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            var url = "/FilesUploaded/" + filename;
            var rootPath = _evn.WebRootPath.ToString() + "/FilesUploaded";
            filename = rootPath + "/" + filename;
            if (!Directory.Exists(rootPath))
            {
                Directory.CreateDirectory(rootPath);
            }
            using (FileStream fs = System.IO.File.Create(filename))
            {
                file.CopyTo(fs);
                fs.Flush();
            }
            return url;
        }
    }
}