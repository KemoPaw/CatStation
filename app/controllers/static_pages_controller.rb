class StaticPagesController < ApplicationController

  def root
    render :root
  end
end
#instance method
#default is a a render
#renders a view of its own name >> try to render a files called "root" <-- find file under the /static_pages/...