const showBlogs = () =>
{
  if ($('.Blogs').hasClass('hide'))
  {
    $('#blogsPage').removeClass('hide');
    $('#welcomePage').addClass('hide');
    $('.projectPage').addClass('hide');
    $('.projectBorder').addClass('hide');
    $('#blogsBtn').addClass('hide');
  }
};

export default showBlogs;