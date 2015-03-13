module ApplicationHelper
  # Returns the full title on a per-page basis        # Documentation comment
  def full_title(page_title = '')                     # Method def, optional arg
    base_title = "Ruby on Rails Tutorial Sample App"  # Variable assignment
    if page_title.empty?                              # Boolean test
      base_title                                      # Implicit return
    else
      "#{page_title} | #{base_title}"                 # string interpolation
    end
  end

  def dan_domain
    noun = TokenPhrase.generate(:numbers => false).split('-').sample.pluralize
    if Whois.whois("#{noun}.com").available?
      avail = "available"
    else
      avail = "not available"
    end
    domain = "www.#{noun}.com is #{avail}"
    return domain
  end
end
