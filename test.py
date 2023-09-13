from svgpathtools import svg2paths, wsvg  # you need ``pip install svgpathtools``
from svgpathtools.path import Path as CombinePath
from pathlib import Path


TEST_SVG = Path('./test.svg')


def main():
    path_list, data_list = svg2paths(str(TEST_SVG))
    

    single_path = CombinePath()  # combine all paths together.
    for combine_path in path_list:
        for curve in combine_path:
            single_path.append(curve)
    print (single_path)
    wsvg(single_path, filename=f'results.svg',
         attributes=[dict(fill="#000000", stroke="none", stroke_width=1)],
         openinbrowser=True  # default is False,
         )


if __name__ == '__main__':
    main()
