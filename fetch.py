import urllib.request

urls = {
    'Menu': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzFhMzgyZjE4YjAxNzRhY2E4ZmI5ZmFjNTAyM2ZiMDNkEgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086',
    'ContactUs': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzM4N2Q0MDQ3ZDU4YzQ0NTI4MTQxMTIzMWNiM2U3NTAwEgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086',
    'DownloadApp': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRkOGFiYjkyOTZlZjRjMDZiNGVhZGZiNzVhODc2MGM1EgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086',
    'News': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2IwNjMzMjI0MmQwNDRlNWI4NjJkYWEwOGNmZDdhM2Q5EgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086',
    'Store': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzgyZDMzZjhmZmM0YjQyNDBiOGRlNjBhOTg3ZjIxYmUxEgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086',
    'Collaboration': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzNjOTg5NjI2YmJmMzQwNzBhYWMyMDQxYjRiNjk3YTRhEgsSBxCss4LBwQkYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTY4ODEzMTUzOTkwODE1NjQ1&filename=&opi=89354086'
}

for name, url in urls.items():
    print(f"Downloading {name}...")
    try:
        urllib.request.urlretrieve(url, f"stitch_{name}.html")
        print(f"Saved stitch_{name}.html")
    except Exception as e:
        print(f"Failed {name}: {e}")
